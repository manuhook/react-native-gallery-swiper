import React from "react";
import {
    Platform,
    Dimensions,
    StyleSheet,
    Linking,
    View,
    Text,
    TouchableWithoutFeedback,
    Image
} from "react-native";
import PropTypes from "prop-types";
import GallerySwiper from "react-native-gallery-swiper";
// import GallerySwiper from "./src";

import testData from "./data";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;

const backIcon = require("./assets/arrow_back_ios_white_36dp.png");

export default class ReactNativeGallerySwiperExample extends React.PureComponent {
    state = {
        galleryIndex: 0
    }

    componentDidMount() {
        // dynamic initialPage
        // setTimeout(() => {
        //     this.setState({ galleryIndex: 1 });
        // }, 2000);
    }

    render() {
        // console.log("Data length total: ", testData.length);
        return (
            <View
                style={styles.container}
            >
                <Header
                    renderPageHeader={(image, i) => {
                        return (
                            <View style={[styles.statusBarTop, styles.rowMiddleAlign]}>
                                <TouchableWithoutFeedback onPress={
                                    () => Linking.openURL("https://luehangs.site")
                                }>
                                    <Image source={backIcon}
                                        style={{marginLeft: 10, height: 30, width: 30}}
                                    />
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={
                                    () => Linking.openURL("https://luehangs.site")
                                }>
                                    <Image source={{
                                            uri: "https://luehangs.site/images/lue-hang2018-square.jpg"
                                        }}
                                        style={styles.userPic}
                                    />
                                </TouchableWithoutFeedback>
                                <View>
                                    <Text style={[
                                        styles.profilePrimary,
                                        styles.whiteText]}
                                    >
                                        {image.title}
                                    </Text>
                                    <Text style={[
                                        styles.profileSecondary,
                                        styles.whiteText
                                    ]}>
                                        {image.description} - index: {i}
                                    </Text>
                                </View>
                            </View>
                        );
                    }}
                    images={testData}
                    galleryIndex={this.state.galleryIndex}
                />
                <GallerySwiper
                    // sensitiveScroll={true}
                    initialPage={this.state.galleryIndex}
                    images={testData}
                    onPageSelected={
                        (index) => this.setState({ galleryIndex: index })
                    }
                    // imageComponent={(imageProps, d, i) => {
                    //     // console.log(imageProps);
                    //     return (
                    //         <Image
                    //             {...imageProps}
                    //             // resizeMode="cover"
                    //         />
                    //     );
                    // }}
                    loadMinimal={true}
                    loadMinimalSize={2}
                    // onSingleTapConfirmed={() => console.log("1")}
                    // onDoubleTapConfirmed={() => console.log("2")}
                    // onLongPress={(i, j) => console.log(i, j)}
                />
                <Footer
                    renderPageFooter={(image, i) => {
                        return (
                            <View style={[styles.footerBottom, styles.colMiddleAlign]}>
                                <TouchableWithoutFeedback
                                    onPress={() => {
                                        Linking.openURL("https://www.luehangs.site");
                                    }}
                                >
                                    <Text style={[styles.footerPrimary, { fontWeight: "bold", color: "#BABABA" }]}>
                                        LH Blog
                                    </Text>
                                </TouchableWithoutFeedback>
                                <Text style={[
                                    styles.footerSecondary,
                                    { fontWeight: "bold", color: "#DFDFDF" }
                                    ]}>
                                    Learn JavaScript and React Native with project examples
                                    along with Cyber Security and Ethical Hacking.
                                </Text>
                            </View>
                        );
                    }}
                    images={testData}
                    galleryIndex={this.state.galleryIndex}
                />
            </View>
        );
    }
}

class Footer extends React.PureComponent {
    static propTypes = {
        renderPageFooter: PropTypes.func,
        images: PropTypes.array.isRequired,
        galleryIndex: PropTypes.number.isRequired
    }

    render() {
        const { renderPageFooter, images, galleryIndex } = this.props;
        const footer = renderPageFooter
            ? renderPageFooter(images[galleryIndex], galleryIndex)
            : undefined;
        return (
            <View style={{ bottom: 0, width: "100%", position: "absolute", zIndex: 1000 }}>
                { footer }
            </View>
        );
    }
}

class Header extends React.PureComponent {
    static propTypes = {
        renderPageHeader: PropTypes.func,
        images: PropTypes.array.isRequired,
        galleryIndex: PropTypes.number.isRequired
    }

    render() {
        const { renderPageHeader, images, galleryIndex } = this.props;
        const header = this.props.renderPageHeader
            ? renderPageHeader(images[galleryIndex], galleryIndex)
            : undefined;
        return (
            <View style={{ top: 0, width: "100%", position: "absolute", zIndex: 1000 }}>
                { header }
            </View>
        );
    }
}

function isIPhoneX() {
    const X_WIDTH = 375;
    const X_HEIGHT = 812;
    return (
        Platform.OS === "ios" &&
            ((deviceHeight === X_HEIGHT && deviceWidth === X_WIDTH) ||
            (deviceHeight === X_WIDTH && deviceWidth === X_HEIGHT))
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#368FFA"
    },
    statusBarTop: {
        paddingTop: isIPhoneX()
            ? 30 + 2.5
            : platform === "ios"
            ? 20 + 2.5
            : 2.5
    },
    // header: {
    //     height: isIPhoneX() ? 88 : 64,
    //     backgroundColor: "transparent"
    // },
    // mobileHeader: {
    //     width: deviceWidth,
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "center"
    // },
    rowMiddleAlign: {
        flexDirection: "row",
        alignItems: "center"
    },
    colMiddleAlign: {
        flexDirection: "column",
        justifyContent: "center"
    },
    footerBottom: {
        paddingBottom: isIPhoneX()
            ? 30 + 2.5
            : platform === "ios"
            ? 2.5
            : 2.5
    },
    userPic: {
        height: 30,
        width: 30,
        borderRadius: platform === "ios"
            ? 5 : 100,
        marginRight: 10
    },
    whiteText: {
        fontWeight: "bold",
        color: "#fafafa"
    },
    profilePrimary: {
        fontSize: 14,
        paddingHorizontal: 5
    },
    profileSecondary: {
        fontSize: 12,
        paddingHorizontal: 5
    },
    footerPrimary: {
        fontSize: 20,
        paddingHorizontal: 10
    },
    footerSecondary: {
        fontSize: 16,
        paddingHorizontal: 10
    }
});
