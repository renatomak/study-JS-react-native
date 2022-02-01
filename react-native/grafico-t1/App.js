import { StatusBar } from 'expo-status-bar';
import DefaultScreen from './src/components/DefaultScreen';
import Router from './src/Router';

export default function App() {
  return (
    <DefaultScreen>
      <Router />
      <StatusBar style="auto" />
    </DefaultScreen>
  );
}
