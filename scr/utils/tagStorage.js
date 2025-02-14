import AsyncStorage from '@react-native-async-storage/async-storage';

// ✅ Add a Tagged Post
export const addTaggedPost = async (updatedTags) => {
  try {

    await AsyncStorage.setItem('taggedPosts', JSON.stringify(updatedTags));
    console.log(`✅ Post tagged successfully!`);
  } catch (error) {
    console.error('❌ Error adding tagged post:', error);
  }
};

// ✅ Get All Tagged Posts
export const getTaggedPosts = async () => {
  try {
    const storedTags = await AsyncStorage.getItem('taggedPosts');
    return storedTags ? JSON.parse(storedTags) : [];
  } catch (error) {
    console.error('❌ Error retrieving tagged posts:', error);
    return [];
  }
};
