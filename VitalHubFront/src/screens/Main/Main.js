// Importar o recurso do bottom tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const BottomTab = createBottomTabNavigator()

// Importando as telas
import { PacientAppointments } from '../PacientAppointments/PacientAppointments'
import { UserProfile } from '../UserProfile/UserProfile'

import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { ContentIcon, TextIcon } from './Style'

export const Main = () => {
  return (
    <BottomTab.Navigator
      // Definir a rota inicial
      initialRouteName="PacientAppointments"

      screenOptions={ ({ route }) => ({
        tabBarStyle: { backgroundColor: "#FFFFFF", height : 80, paddingTop: 10 },
        tabBarActiveBackgroundColor : "transparent",
        tabBarShowLabel : false,
        headerShown: false,

        tabBarIcon : ({ focused }) => {

          if( route.name === "PacientAppointments" )
          {
            return (
              <ContentIcon 
                tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
              >
                <FontAwesome name='calendar' size={18} color="#4E4B59" />
                { focused && <TextIcon>Agenda</TextIcon> }
              </ContentIcon>
            )
          }else{
            return (
              <ContentIcon 
                tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
              >
                <FontAwesome5 name='user-circle' size={22} color="#4E4B59" />
                { focused && <TextIcon>Perfil</TextIcon> }
              </ContentIcon>
            )
          }
        }
      }) }
    >
      
      <BottomTab.Screen 
        name="PacientAppointments"
        component={ PacientAppointments }
      />


      <BottomTab.Screen 
        name="UserProfile"
        component={ UserProfile}
      />
    </BottomTab.Navigator>
  )
}