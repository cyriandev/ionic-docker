import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Quotes from '../components/Quotes';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
    <Quotes/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
