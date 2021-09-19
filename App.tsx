import React from 'react';
import './src/i18n';
import {View, Text, StyleSheet, I18nManager, Button} from 'react-native';
import {useTranslation} from 'react-i18next';
// @ts-expect-error
import RNRestart from 'react-native-restart';
import TabViewExample from './src/component/TabView';

const App = ({}) => {
  const {t, i18n} = useTranslation();
  const currentLang = i18n.language;
  const changeLanguage = () => {
    i18n.changeLanguage(currentLang === 'ar' ? 'en' : 'ar').then(() => {
      setTimeout(() => {
        I18nManager.forceRTL(i18n.language === 'ar');
        RNRestart.Restart();
      }, 100);
    });
  };

  return (
    <View style={styles.container}>
      <Text>{t('Welcome')}</Text>
      <Button title={'Change language'} onPress={changeLanguage} />
      <TabViewExample />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
