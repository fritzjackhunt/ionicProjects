import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorythmCard from './components/Biorythm';
import { useLocalStorage } from './hooks';

function App() {

  const [birthDate, setBirthDate ] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>BioRythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate && 
          <BiorythmCard targetDate={targetDate} />
        }
        <IonItem>
          <IonLabel position="floating">Date Of Birth:</IonLabel>
          <IonDatetime displayFormat="YYYY-MMMM-DD"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Target Date:</IonLabel>
          <IonDatetime displayFormat="YYYY-MMMM-DD"
            value={birthDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
