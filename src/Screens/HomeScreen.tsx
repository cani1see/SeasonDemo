import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import {icon_down, icon_filter} from '../constants/icons';
import {mainList} from '../constants/fake_data';

const DRESSES = ['Dress', 'Pants', 'Blazers', 'Jackets'];

const COLUMN_ITEM_WIDTH = (Dimensions.get('window').width - 20 * 2 - 25) / 2;

const HomeListHeader = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      <View style={styles.filterLine}>
        <TouchableOpacity style={styles.dropdown} activeOpacity={0.8}>
          <Text style={{fontSize: 16, fontFamily: 'Avenir-Roman'}}>
            Casual Dress
          </Text>
          <Image source={icon_down} style={styles.iconDown} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
          <Image source={icon_filter} style={styles.iconFilter} />
        </TouchableOpacity>
      </View>

      <View style={styles.categoryLine}>
        {DRESSES.map((it, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedTab(index)}
            style={[
              styles.category,
              {
                backgroundColor:
                  selectedTab === index ? '#222222' : 'transparent',
              },
            ]}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Avenir-Roman',
                color: selectedTab === index ? 'white' : '#222222',
              }}>
              {it}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export const HomeScreen = ({navigation}) => {
  const toDetail = params => navigation.navigate('DetailScreen', params);
  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => toDetail(item)}
        activeOpacity={0.8}
        style={{
          width: COLUMN_ITEM_WIDTH,
          aspectRatio: 158 / 247,
        }}>
        <Image source={item.image} style={styles.itemImage} />
        <View style={styles.itemFoot}>
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>
              {`$${Number(item.price).toFixed(2)}`}
              {!!item.discount && (
                <Text style={styles.itemDiscount}>
                  &nbsp;&nbsp;{item.discount}Off
                </Text>
              )}
            </Text>
          </View>
          <TouchableOpacity hitSlop={{left: 8, right: 8}} style={styles.dots}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.content}>
      <View style={styles.lining}>
        <LinearGradient colors={['#f9f9f9', '#fff']} style={styles.gradient} />
      </View>
      <FlatList
        ListHeaderComponent={HomeListHeader}
        data={mainList}
        numColumns={2}
        keyExtractor={item => `${item.id}`}
        columnWrapperStyle={styles.columnWrappingStyle}
        renderItem={_renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  filterLine: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  categoryLine: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 2.5,
  },
  iconDown: {width: 16, height: 10},
  iconFilter: {width: 20, height: 19},
  lining: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  gradient: {height: 150},
  dropdown: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 20,
    shadowOpacity: 0.05,
  },
  filter: {
    width: 47,
    aspectRatio: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 20,
    shadowOpacity: 0.05,
  },
  category: {
    width: 80,
    height: 36,
    margin: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  columnWrappingStyle: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12.5,
  },
  itemFoot: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  dots: {
    height: 18,
    marginRight: 4,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  dot: {
    width: 4,
    aspectRatio: 1,
    borderRadius: 2,
    backgroundColor: '#9A9A9A',
  },
  itemImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 158 / 200,
    borderRadius: 4,
  },
  itemTitle: {fontSize: 14, color: '#222222', lineHeight: 17, marginBottom: 3},
  itemPrice: {fontSize: 13, fontFamily: 'Avenir-Heavy', lineHeight: 18},
  itemDiscount: {color: '#FF3942'},
});
