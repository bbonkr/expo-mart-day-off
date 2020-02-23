export { DrawerNavigator } from './DrawerNavigator';

// import React from 'react';
// import { Scene, Router, Drawer } from 'react-native-router-flux';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Platform } from 'react-native';
// import { Menu } from '../components/Menu';
// import { Today } from '../components/Today';
// import { About } from '../components/About';

// const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';
// const MenuIcon = () => {
//     return <FontAwesome5 name="menu" />;
// };

// export const Naviation = () => {
//     const stateHandler = (prevState, newState, action) => {
//         console.log('onStateChange: ACTION:', action);
//     };

//     const getSceneStyle = () => ({
//         backgroundColor: '#F5FCFF',
//         shadowOpacity: 1,
//         shadowRadius: 3,
//     });

//     // const transitionConfig = () => ({
//     //     screenInterpolator: StackViewStyleInterpolator.forFadeFromBottomAndroid,
//     // });

//     return (
//         <Router
//             onStateChange={stateHandler}
//             getSceneStyle={getSceneStyle}
//             uriPrefix={prefix}
//         >
//             <Drawer
//                 hideNavBar
//                 key="drawer"
//                 onExit={() => {
//                     console.log('Drawer closed');
//                 }}
//                 onEnter={() => {
//                     console.log('Drawer opened');
//                 }}
//                 contentComponent={Menu}
//                 drawerIcon={MenuIcon}
//                 drawerWidth={240}
//             >
//                 <Scene
//                     key="main"
//                     component={Today}
//                     title=""
//                     initial
//                     hideNavBar
//                 />
//                 <Scene key="about" component={About} title="정보" hideNavBar />
//             </Drawer>
//         </Router>
//     );
// };
