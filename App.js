import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, Modal, Alert } from "react-native";
import Logo from "./src/assets/logo.png";
import Carta1 from "./src/assets/carta1.png";
import Carta2 from "./src/assets/carta2.png";
import Team from "./src/components/Team";
import styles from "./Styles";

export default function App() {
  const [time1, setTime1] = useState(0)
  const [time2, setTime2] = useState(0)
  const [winner, setWinner] = useState(null)

  function checkForWinner(score, team){
    if(score > 11) {
    setWinner(team);
    }
  }
  return (
    <View style={styles.container}>
      <Modal visible={winner !== null} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.congratsText}>Parabéns,{winner} ganhou!</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => {
            setWinner(null);
            setTime1(0);
            setTime2(0);
          }}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.teams}>
        <Team image={Carta1} onPress={() => {
          var newScore = time1 + 1;
          setTime1(newScore);
          checkForWinner(newScore,"time1");
        }} points={time1} />
        <Team image={Carta2} onPress={() => {
        var newScore = time2 + 1;
        setTime2(newScore);
        checkForWinner(newScore,"time2");
        }} points={time2} />
      </View>
    </View>
  );
}
