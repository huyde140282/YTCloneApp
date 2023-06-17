import { act, renderHook } from '@testing-library/react-hooks';
import { useHandleShare } from './handleShare';
import { collection, doc, getDocs, setDoc, query, where } from 'firebase/firestore';
import { firestore } from '@/firebase/config';
import { showErrorToast, showSuccessfullToast } from '@/shared/handler';
import { randomId } from '@/shared/initalData';
import { useRouter } from 'next/navigation';

// Mocked dependencies
jest.mock('firebase/firestore');
jest.mock('@/firebase/config');
jest.mock('@/shared/handler');
jest.mock('@/shared/initalData');
jest.mock('next/navigation');

test('should handle share', async () => {
    // Mock user
    const user = { id: 'user-id', email: 'huypro@gmail.com', password: '' };

    // Render the hook
    const { result, waitForNextUpdate } = renderHook(() => useHandleShare(user));

    // Mock the necessary functions
    const mockShowErrorToast = showErrorToast as jest.Mock;
    const mockShowSuccessfullToast = showSuccessfullToast as jest.Mock;
    const mockUseRouter = useRouter as jest.Mock;
    const mockRouterPush = jest.fn();
    mockUseRouter.mockReturnValue({ push: mockRouterPush });

    // Mock Firestore queries and functions
    const mockCollection = collection as jest.Mock;
    const mockQuery = query as jest.Mock;
    const mockWhere = where as jest.Mock;
    const mockGetDocs = getDocs as jest.Mock;
    const mockSetDoc = setDoc as jest.Mock;
    const mockDoc = doc as jest.Mock;

    mockCollection.mockReturnValueOnce('videos-collection');
    mockQuery.mockReturnValueOnce('videos-query');
    mockWhere.mockReturnValueOnce('videos-query-with-condition');
    mockGetDocs.mockResolvedValueOnce({ empty: true });

    // Invoke the handleShare function
    const videoData = {
        videoUrl: 'video-url',
        title: 'title',
        description: 'description',
    };

    act(() => {
        result.current.handleShare(videoData);
    });

    // Assert the expected behavior

    // Wait for the hook to finish async actions
    await waitForNextUpdate();

    // Assert the expected behavior after async actions

    // - Check that showErrorToast is called when videoDocsSnapshot is not empty
    expect(mockShowErrorToast).toHaveBeenCalledWith('Video already exists');

    // - Check that setDoc is called with the correct arguments
    expect(mockSetDoc).toHaveBeenCalledWith(
        mockDoc(firestore, 'videos', randomId),
        { ...videoData, userId: 'user-id', dislikes: 0, likes: 0 }
    );

    // - Check that showSuccessfullToast is called
    expect(mockShowSuccessfullToast).toHaveBeenCalledWith('Successfully shared');

    // - Check that router.push is called with the correct argument
    expect(mockRouterPush).toHaveBeenCalledWith('/');

    // - Check that setLoading is called with false
    expect(result.current.loading).toBe(false);
});
