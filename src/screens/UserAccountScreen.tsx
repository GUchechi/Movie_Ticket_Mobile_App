import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { COLORS, FONTSIZE, SPACING } from '../theme/Theme';
import { StatusBar } from 'expo-status-bar';
import AppHeader from '../components/AppHeader';
import SettingComponent from '../components/SettingComponent';


const UserAccountScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />


      <View style={styles.appHeaderContainer}>
        <AppHeader
          header={'My Profile'}
          action={() => navigation.goBack()}
        />
      </View>

      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/image/Godswill.jpg')}
          style={styles.avatarImage}
        />
        <Text style={styles.avatarText}>Godswill Uchechi</Text>
      </View>

      <View style={styles.profileContainer}>
        <SettingComponent
          icon="user"
          heading="Account"
          subheading="Edit Profile"
          subtitle="Change Password"
        />
        <SettingComponent
          icon="settings"
          heading="Settings"
          subheading="Theme"
          subtitle="Permissions"
        />
        <SettingComponent
          icon="dollar-sign"
          heading="Offers & Refferrals"
          subheading="Offer"
          subtitle="Refferrals"
        />
        <SettingComponent
          icon="info"
          heading="About"
          subheading="About Movies"
          subtitle="more"
        />
      </View>
    </View>
  );
};

export default UserAccountScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  profileContainer: {
    alignItems: 'center',
    padding: SPACING.space_36,
  },
  avatarImage: {
    height: 80,
    width: 80,
    borderRadius: 80,
  },
  avatarText: {
    fontSize: FONTSIZE.size_18,
    marginTop: SPACING.space_16,
    color: COLORS.White,
    fontWeight: "bold",
  },
});
