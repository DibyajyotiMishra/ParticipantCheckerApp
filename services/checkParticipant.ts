import { Alert, Keyboard } from "react-native";
import getData from "./getData";

export default async function checkParticipant(participantId: string) {
  const result = await getData(participantId);
  if (result.status === true) {
    const { name, individual_events, group_events } = result.user;
    const events = [];
    if (individual_events !== null) {
      const individual_events_names = JSON.parse(individual_events);
      individual_events_names.forEach(event => {
        events.push(event.eventName);
      });
    }
    if (group_events !== null) {
      const group_events_names = JSON.parse(group_events);
      group_events_names.forEach(event => {
        events.push(event.eventName);
      });
    }
    Alert.alert(`${result.message}`, `${name} has registered for ${events}`);
  } else {
    Alert.alert("Error", "Participant not found");
  }
  Keyboard.dismiss();
}
