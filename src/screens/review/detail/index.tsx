import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BASE_URL, IMAGE } from '../../../constants/api';
import LikeReview from '../../like/likeReview';

const ReviewItem = ({ review }) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{review.createBy.username}</Text>
        <Text>{review.createdAt}</Text>
      </View>
      <View style={styles.ratingContainer}>
        {/* Hiển thị số sao đánh giá */}
        {[...Array(review.rating)].map((_, index) => (
          <Image key={index} source={require('./star.png')} style={styles.star} />
        ))}
      </View>
      <Text style={styles.description}>{review.description}</Text>
      {/* Hiển thị hình ảnh */}
      <View style={styles.imageContainer}>
        {review.imagesId.map(imageId => (
          <Image key={imageId} source={{ uri: `${BASE_URL}${IMAGE.RESOURCE}${imageId}` }} style={styles.image} />
        ))}
      </View>
      <LikeReview reviewId={review?.id} isLike={review?.isLike} style={[]}></LikeReview>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  username: {
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  description: {
    marginBottom: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
});

export default ReviewItem;