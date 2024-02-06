import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from '../theme/Theme';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Entypo } from '@expo/vector-icons';


const TicketScreen = ({ route, navigation }: any) => {
  const [ticketData, setTicketData] = useState<any>(route.params)


  // Getting the Ticket Data
  useEffect(() => {
    (async () => {
      try {
        const ticket = await AsyncStorage.getItem('ticket')
        if (ticket !== undefined && ticket !== null) {
          setTicketData(JSON.parse(ticket));
        }
      } catch (error) {
        console.error('Something went wrong while getting data', error);
      }
    })();
  }, []);

  if (ticketData !== route.params && route.params != undefined) {
    setTicketData(route.params);
  }

  // If there is an undefined or a null value
  if (ticketData == undefined || ticketData == null) {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.appHeaderContainer}>
          <AppHeader
            header={'My Tickets'}
            action={() => navigation.goBack()}
          />
        </View>
      </View>
    );
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.appHeaderContainer}>
          <AppHeader
            header={'My Tickets'}
            action={() => navigation.goBack()}
          />
        </View>

        <View style={styles.ticketContainer}>
          <ImageBackground
            source={{ uri: ticketData?.ticketImage }}
            style={styles.ticketBGImage}>
            <LinearGradient
              colors={[COLORS.OrangeRGBA0, COLORS.Grey]}
              style={styles.linearGradient}>
            </LinearGradient>
          </ImageBackground>
          <View style={styles.linear}></View>

          <View style={styles.ticketFooter}>
            <View style={styles.ticketDateContainer}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.dateTitle}>{ticketData?.date.date}</Text>
                <Text style={styles.subtitle}>{ticketData?.date.day}</Text>
              </View>
              <View style={styles.subtitleContainer}>
                <Entypo name="clock" style={styles.clockIcon} />
                <Text style={styles.subtitle}>{ticketData?.time}</Text>
              </View>
            </View>
            <View style={styles.ticketSeatContainer}>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subheading}>Hall</Text>
                <Text style={styles.subtitle}>02</Text>
              </View>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subheading}>Row</Text>
                <Text style={styles.subtitle}>04</Text>
              </View>
              <View style={styles.subtitleContainer}>
                <Text style={styles.subheading}>Seats</Text>
                <Text style={styles.subtitle}>
                  {ticketData?.seatArray
                    .slice(0, 3)
                    .map((item: any, index: number, arr: any) => {
                      return item + (index == arr.length - 1 ? '' : ', ');
                    })}
                </Text>
              </View>
            </View>
            <Image
              source={require('../../assets/image/barcode.png')}
              style={styles.barcodeImage}
            />
          </View>


        </View>
      </View>
    </ScrollView>

  );
};



const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
    marginBottom: SPACING.space_20,
  },
  ticketContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  ticketBGImage: {
    alignSelf: 'center',
    width: 300,
    aspectRatio: 200 / 300,
    borderTopLeftRadius: BORDERRADIUS.radius_25,
    borderTopRightRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  linearGradient: {
    height: '30%',
  },
  linear: {
    borderTopColor: COLORS.Black,
    borderTopWidth: 3,
    width: 300,
    alignSelf: 'center',
    backgroundColor: COLORS.Grey,
    borderStyle: 'dashed',
  },
  ticketFooter: {
    backgroundColor: COLORS.Grey,
    width: 300,
    alignItems: 'center',
    paddingBottom: SPACING.space_36,
    alignSelf: 'center',
    borderBottomLeftRadius: BORDERRADIUS.radius_25,
    borderBottomRightRadius: BORDERRADIUS.radius_25,
  },
  ticketDateContainer: {
    flexDirection: 'row',
    gap: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.space_10,
  },
  ticketSeatContainer: {
    flexDirection: 'row',
    gap: SPACING.space_36,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: SPACING.space_10,
  },
  dateTitle: {
    // fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
  },
  subtitle: {
    // fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  subheading: {
    // fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.White,
  },
  subtitleContainer: {
    alignItems: 'center',
  },
  clockIcon: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.White,
    paddingBottom: SPACING.space_10,
  },
  barcodeImage: {
    height: 50,
    aspectRatio: 158 / 52,
  },
  blackCircle: {
    height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: COLORS.Black,
  },
});

export default TicketScreen;