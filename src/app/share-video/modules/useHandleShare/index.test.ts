import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useHandleShare } from "./";
import { getDocs, setDoc } from "firebase/firestore";
import { showErrorToast, showSuccessfullToast } from "@/shared/handler";

jest.mock("firebase/firestore");
jest.mock("@/shared/handler");

describe("useHandleShare", () => {
    const mockGetDocs = getDocs as jest.Mock;
    const mockSetDoc = setDoc as jest.Mock;
    const mockShowErrorToast = showErrorToast as jest.Mock;
    const mockShowSuccessfullToast = showSuccessfullToast as jest.Mock;
    const mockRouterPush = jest.fn();

    beforeAll(() => {
        jest.mock('next/navigation', () => ({
            useRouter: jest.fn().mockReturnValue({
                push: jest.fn(),
            }),
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("should handle sharing a video successfully", async () => {
        const user = { id: "mockedUserId", email: "adkals", password: '12321' };
        const { result } = renderHook(() => useHandleShare(user));

        const videoData = {
            title: "Test Video",
            videoUrl: "https://www.example.com/video",
            description: "This is a test video",
        };

        mockGetDocs.mockResolvedValueOnce({ empty: true } as never);

        await act(async () => {
            await result.current.handleShare(videoData);
        });

        expect(mockGetDocs).toHaveBeenCalledTimes(1);
        expect(mockSetDoc).toHaveBeenCalledTimes(1);
        expect(mockSetDoc).toHaveBeenCalledWith(
            expect.anything(),
            {
                ...videoData,
                userId: "mockedUserId",
                dislikes: 0,
                likes: 0,
            },
            expect.anything()
        );
        expect(mockShowSuccessfullToast).toHaveBeenCalledWith("Successfully shared");
        expect(mockRouterPush).toHaveBeenCalledWith("/");
        expect(result.current.loading).toBe(false);
    });

    test("should show error toast if video already exists", async () => {
        const user = { id: "mockedUserId", email: "adkals", password: '12321' };
        const { result } = renderHook(() => useHandleShare(user));

        const videoData = {
            title: "Test Video",
            videoUrl: "https://www.example.com/video",
            description: "This is a test video",
        };

        mockGetDocs.mockResolvedValueOnce({ empty: false } as never);

        await act(async () => {
            await result.current.handleShare(videoData);
        });

        expect(mockGetDocs).toHaveBeenCalledTimes(1);
        expect(mockSetDoc).not.toHaveBeenCalled();
        expect(mockShowErrorToast).toHaveBeenCalledWith("Video already exists");
        expect(result.current.loading).toBe(false);
    });

    test("should show error toast on failure", async () => {
        const user = { id: "mockedUserId", email: "adkals", password: '12321' };
        const { result } = renderHook(() => useHandleShare(user));

        const videoData = {
            title: "Test Video",
            videoUrl: "https://www.example.com/video",
            description: "This is a test video",
        };

        mockGetDocs.mockRejectedValueOnce(new Error("Failed to get docs"));

        await act(async () => {
            await result.current.handleShare(videoData);
        });

        expect(mockGetDocs).toHaveBeenCalledTimes(1);
        expect(mockSetDoc).not.toHaveBeenCalled();
        expect(mockShowErrorToast).toHaveBeenCalledWith("Failed to share video");
        expect(result.current.loading).toBe(false);
    });

    test("should handle share when user is undefined", async () => {
        const { result } = renderHook(() => useHandleShare(undefined));

        const videoData = {
            title: "Test Video",
            videoUrl: "https://www.example.com/video",
            description: "This is a test video",
        };

        await act(async () => {
            await result.current.handleShare(videoData);
        });

        expect(mockGetDocs).not.toHaveBeenCalled();
        expect(mockSetDoc).not.toHaveBeenCalled();
        expect(mockShowErrorToast).not.toHaveBeenCalled();
        expect(result.current.loading).toBe(false);
    });
});
