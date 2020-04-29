declare module 'react-native-gallery-swiper' {
  import { Component } from "react";
  import { FlatListProps, ImageProps, ImageURISource, ViewStyle, ImageResizeMode } from "react-native";
  import PageList from 'react-native-page-list';

  export type PageState = "idle" | "settling" | "dragging"

  export type GestureState = {
    moveX, moveY, x0, y0, dx, dy, vx, vy: number
    numberActiveTouches: number
    _accountsForMovesUpTo: number
    previousMoveX, previousMoveY: number
    pinch?: number
    previousPinch?: number
    singleTapUp: boolean
    doubleTapUp: boolean
    _singleTabFailed: boolean
  }
  
  export type Transform = {
    scale: number,
    translateX: number,
    translateY: number
  }

  export type ImageObj = {
    source?: string | ImageURISource
    uri?: string
    url?: string
    URI?: string
    URL?: string
    dimensions?: { width: number, height: number }
  }

  type GallerySwiperProps = {
    images: ImageObj[],
    style?: ViewStyle,
    initialPage?: number,
    resizeMode?: ImageResizeMode,
    initialNumToRender?: number,
    scrollViewStyle?: ViewStyle,
    pageMargin?: number,
    sensitiveScroll?: boolean,
    onPageSelected?: (page: number) => void,
    onPageScrollStateChanged?: (state: PageState) => void,
    onPageScroll?: (event: { position: number, offset: number, fraction: number }) => void,
    onPinchTransforming?: (transform: Transform, pageId: number) => void,
    onPinchStartReached?: (transform: Transform, pageId: number) => void,
    onPinchEndReached?: (transform: Transform, pageId: number) => void,
    onDoubleTapStartReached?: (transform: Transform, pageId: number) => void,
    onDoubleTapEndReached?: (transform: Transform, pageId: number) => void,
    onDoubleTapConfirmed?: (currentPage: number) => void,
    onSingleTapConfirmed?: (currentPage: number) => void,
    onGalleryStateChanged?: (idle: boolean) => void,
    onLongPress?: (gestureState: GestureState, currentPage: number) => void,
    onViewTransformed?: (transform: Transform, pageId: number) => void,
    onTransformGestureReleased?: (transform: Transform, pageId: number) => void,
    onSwipeUpReleased?: (transform: Transform, pageId: number) => void,
    onSwipeDownReleased?: (transform: Transform, pageId: number) => void,
    onEndReached?: () => void,
    onEndReachedThreshold?: number,
    enableScale?: boolean,
    maxScale?: number,
    enableTranslate?: boolean,
    enableResistance?: boolean,
    resistantStrHorizontal?: ((dx: number) => number | string) | number | string,
    resistantStrVertical?: ((dy: number) => number | string) | number | string,
    maxOverScrollDistance?: number,
    removeClippedSubviews?: boolean,
    imageComponent?: (imageProps: ImageProps, imageDimensions: {width: number, height: number}, index: number) => JSX.Element,
    errorComponent?: () => JSX.Element,
    flatListProps?: FlatListProps,
    refPage?: (galleryViewPager: PageList) => void
  };

  export default class GallerySwiper extends Component<GallerySwiperProps> {
  }
}