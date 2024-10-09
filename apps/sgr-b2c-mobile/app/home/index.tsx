import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Image } from 'expo-image';
import backPreview from '@/assets/images/backPreview.png';
import preview_rev_1 from '@/assets/images/preview_rev_1.png';
import preview_rev_2 from '@/assets/images/preview_rev_2.png';
import preview_rev_3 from '@/assets/images/preview_rev_3.png';

// import {
//   Button,
//   StyledAvatar,
//   StyledLinearGradient,
// } from 'shared-ui-components';

export default function Home() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const arr = [
    {
      id: 0,
      image: preview_rev_1,
      title: 'Ba Na Hills',
      content: 'Experience the Golden Bridge – a walk above the clouds',
    },
    {
      id: 2,
      image: preview_rev_2,
      title: 'Fansipan Legend',
      content:
        'Ride the world’s longest cable car at the Vietnam’s highest point',
    },
    {
      id: 3,
      image: preview_rev_3,
      title: 'Ba Den Moutain',
      content:
        'Find peaceful and spiritual serenity at the top of  Black Virgin Mountain',
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Text>Home page</Text> */}
      <View
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
        <Image
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
          }}
          source={backPreview}
          contentFit="cover"
        />
      </View>
      <Carousel
        loop
        width={windowWidth}
        height={windowHeight}
        // autoPlay={true}
        data={[...arr]}
        mode="horizontal-stack"
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log('current index:', index)}
        modeConfig={{
          parallaxScrollingScale: 0.85,
          parallaxScrollingOffset: 50,
          snapDirection: 'left',
          stackInterval: windowWidth * 0.4,
        }}
        customConfig={() => ({ type: 'positive', viewCount: 2 })}
        pagingEnabled
        snapEnabled
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={[
                  {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <View style={{ height: 240, marginBottom: -80, zIndex: 10 }}>
                  <Image
                    style={{
                      flex: 1,
                      width: 210,
                      height: 240,
                      marginHorizontal: 20,
                    }}
                    source={item?.image}
                    contentFit="cover"
                  />
                </View>
                <View
                  style={{
                    height: 273,
                    backgroundColor: '#fff',
                    width: 230,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 0.5,
                    borderColor: '#ddd',
                    borderBottomWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.8,
                    shadowRadius: 2,
                    elevation: 1,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      paddingHorizontal: 11,
                      fontWeight: 700,
                    }}>
                    {item?.title}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 14,
                      paddingHorizontal: 11,
                      marginTop: 15,
                    }}>
                    {item?.content}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
