import React from 'react';
import dayjs from 'dayjs';

import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
} from '@ionic/react';

import { calculateBiorythms } from '../calculations'
import BiorythmChart from './BiorythmChart'
import './Biorythm.css';

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM YYYY')
}

function BiorythmCard( { birthDate, targetDate} ) {
    const { physical, emotional, intellectual } = calculateBiorythms(birthDate, targetDate);
    return (
        <div>         
        <IonCard className="biorythm ion-text-center">
          <IonCardHeader>
            <IonCardTitle>
              {formatDate(targetDate)}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <BiorythmChart birthDate={birthDate} targetDate={targetDate} />
            <p className="physical">Physical: {physical.toFixed(4)}</p>
            <p className="emotional" >Emotional: {emotional.toFixed(4)}</p>
            <p className="intellectual">Intellectual: {intellectual.toFixed(4)}</p>
          </IonCardContent>
        </IonCard>
        </div>

    );
}

export default BiorythmCard;