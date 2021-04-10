import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from 'color';
import {DefaultNavigationProps} from '../types';

type Props = DefaultNavigationProps<'DetailScreen'>;

export const DetailScreen = ({route}: Props) => {
  const item = route.params;
  const {tintColor} = item;
  const lighterColor = Color(tintColor).lighten(0.04).hex();
  const lightestColor = Color(tintColor).lighten(0.07).hex();
  return (
    <View style={{flex: 1, backgroundColor: item.tintColor}}>
      <Image source={item.image} style={styles.mainImage} />
      <View
        style={[
          styles.backShape1,
          {
            backgroundColor: lighterColor,
          },
        ]}
      />
      <View
        style={[
          styles.backShape2,
          {
            backgroundColor: lightestColor,
          },
        ]}
      />
      <View style={styles.contentShape}>
        <View style={styles.colorDotsWrap}>
          <View style={styles.colorDotSelect}>
            <View style={styles.colorDotCenter} />
          </View>
          <View style={styles.colorDot1} />
          <View style={styles.colorDot2} />
        </View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>
          {`$${Number(item.price).toFixed(2)}`}
          {!!item.discount && (
            <Text style={styles.itemDiscount}>
              &nbsp;&nbsp;{item.discount}Off
            </Text>
          )}
        </Text>
        <Text style={styles.itemDesc}>
          {/* eslint-disable-next-line prettier/prettier */}
          Fitted top made from a polyamide blend. Features wide straps and chest reinforcement.
        </Text>
        <Text style={styles.selectTitle}>Select Size</Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: -4,
            marginVertical: 7,
          }}>
          <TouchableOpacity style={styles.sizeEnable}>
            <Text style={styles.sizeTextEnable}>S</Text>
          </TouchableOpacity>
          <View style={styles.sizeDisable}>
            <Text style={styles.sizeTextDisable}>X</Text>
          </View>
          <View style={styles.sizeDisable}>
            <Text style={styles.sizeTextDisable}>L</Text>
          </View>
          <View style={styles.sizeDisable}>
            <Text style={styles.sizeTextDisable}>XL</Text>
          </View>
        </View>
        <View style={styles.contentFooter}>
          <TouchableOpacity style={styles.btnGhost}>
            <Text style={styles.btnGhostText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSolid}>
            <Text style={styles.btnSolidText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 158 / 200,
  },
  backShape1: {
    position: 'absolute',
    left: 14,
    bottom: 0,
    width: 146,
    height: 213,
    borderRadius: 30,
    opacity: 0.78,
  },
  backShape2: {
    position: 'absolute',
    left: 31,
    bottom: 0,
    width: 146,
    height: 251,
    borderRadius: 30,
  },
  contentShape: {
    position: 'absolute',
    left: 50,
    bottom: 0,
    right: 0,
    height: 297,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 25,
  },
  colorDotsWrap: {
    position: 'absolute',
    right: 25,
    top: 25,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  colorDotSelect: {
    width: 24,
    height: 24,
    borderColor: '#C4F6FF',
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorDotCenter: {
    width: 18,
    height: 18,
    backgroundColor: '#C4F6FF',
    borderRadius: 9,
  },
  colorDot1: {
    width: 18,
    height: 18,
    backgroundColor: '#FDE0F4',
    borderRadius: 9,
  },
  colorDot2: {
    width: 18,
    height: 18,
    backgroundColor: '#FDDBB8',
    borderRadius: 9,
  },
  itemTitle: {fontSize: 18, color: '#222222', lineHeight: 24, marginBottom: 3},
  itemPrice: {fontSize: 16, lineHeight: 22, fontFamily: 'Avenir-Heavy'},
  itemDesc: {
    fontSize: 13,
    lineHeight: 18,
    color: '#222222',
    opacity: 0.5,
    marginTop: 17,
    marginBottom: 20,
  },
  itemDiscount: {color: '#FF3942'},
  selectTitle: {fontSize: 13, lineHeight: 18, fontWeight: '500'},
  sizeEnable: {
    width: 30,
    height: 29,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  sizeTextEnable: {
    color: '#222',
  },
  sizeDisable: {
    width: 30,
    height: 29,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  sizeTextDisable: {
    color: '#e2e2e2',
  },
  btnGhost: {
    height: 40,
    flex: 1,
    borderColor: '#222222',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  btnGhostText: {color: '#222222', fontSize: 14, fontWeight: '500'},
  btnSolid: {
    height: 40,
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSolidText: {color: '#fff', fontSize: 14, fontWeight: '500'},
  contentFooter: {
    flexGrow: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});
