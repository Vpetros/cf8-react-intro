// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
// import Layout from "./components/Layout.tsx";
// import CounterWithRef from "./components/CounterWithRef.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import NameChanger from "./components/NameChanger.tsx";
import HomePage from "./pages/HomePage.tsx";
// import PreviousValue from "./components/PreviousValue.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import WindowSize from "./components/WindowSize.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import {useEffect} from "react";
import Timer from "./components/Timer.tsx";
import RouterLayout from "./components/RouterLayout.tsx";
import UserPage from "./pages/UserPage.tsx";
import ControlledInput from "./components/ControlledInput.tsx";
import UncontrolledInput from "./components/UncontrolledInput.tsx";
// import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
// import CounterButton from "./components/CounterButton.tsx";
// import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
// import NameChanger from "./components/NameChanger.tsx";
// import CounterButton from "./components/CounterButton.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
// import Counter from "./components/Counter.tsx";

function App() {

    // useEffect(() => {
    //   const id  = setInterval(()=> console.log(id),1000)
    //   return() => clearInterval(id);
    // },[]);

    // useEffect(()=> {
    //   let counter: number = 1;
    //   const id: number = setInterval(()=>{
    //     console.log(counter++);
    //   },1000)
    //   return () => clearInterval(id);
    // }, [])

    // useEffect(() => {
    //   history.pushState({page: 1}, "", "/page");
    //   history.replaceState({page: 1}, "", "/page1");
    //
    //   window.onpopstate = (e) => {
    //     console.log(e.state);
    //   }
    // })

    return (
        <>
            {/*<ViteIntro />*/}
            {/*<ClassComponent/>*/}
            {/*<FunctionalComponent/>*/}
            {/*<ArrowFunctionalComponent/>*/}
            {/*<ArrowFunctionalComponentWithProps title="Is an Arrow Functional Component With Props"/>*/}
            {/*<ArrowFunctionalComponentWithProps title="2nd title"/>*/}
            {/*<ArrowFunctionalComponentWithPropsType*/}
            {/*    title="Is an Arrow Functional Component With 2 Props"*/}
            {/*    description="lorem ipsum dolor sit amet"*/}
            {/*/>*/}

            {/*<Card title="Card">*/}
            {/*</Card>*/}
            {/*<Layout>*/}
                {/*<ArrowFunctionalComponentWithPropsType*/}
                {/*    title="Is an Arrow Functional Component With 2 Props"*/}
                {/*    description="lorem ipsum dolor sit amet"*/}
                {/*/>*/}
                {/*<FunctionalComponentWithState/>*/}
                {/*<ClassComponentWithState/>*/}
                {/*<Counter/>*/}
                {/*<NameChanger/>*/}
                {/*<CounterWithMoreStates/>*/}
                {/*<CounterAdvanced/>*/}
                {/*<CounterWithCustomHook/>*/}
                {/*<NameChangerWithEffect/>*/}
                {/*<Timer/>*/}
                {/*<WindowSize/>*/}
                {/*<FocusInput/>*/}
                {/*<PreviousValue/>*/}
                {/*<CounterWithRef/>*/}

            {/*</Layout>*/}


            <BrowserRouter>
                <Routes>
                  <Route element={<RouterLayout />}>
                    <Route index element={<HomePage />} />
                    {/*<Route path="name-changer" element={<NameChanger />}/>*/}
                    {/*<Route path="timer" element={<Timer />}/>*/}

                        <Route path="examples?">
                            <Route path="name-changer" element={<NameChanger />} />
                            <Route path="timer" element={<Timer />} />
                            <Route path="controlled-input" element={<ControlledInput />} />
                            <Route path="uncontrolled-input" element={<UncontrolledInput />} />
                            {/*<Route path="*" element={<ExamplePage/>}/>*/}
                        </Route>
                  </Route>

                    {/*<Route path="users/:userId" element={<UserPage />} />*/}
                    {/*<Route path="users/:userId/accounts" element={<UserAccountPage />} />*/}



                    <Route path="users">
                        <Route path=":userId">
                            <Route index element={<UserPage/>}/>
                            {/*<Route path="accounts" element={<UserAccountPage/>}/>*/}
                        </Route>
                    </Route>

                    {/*<Route path="files/*" element={<FilePage />} />*/}

                    {/*<Route path="*" element={<PageNotFound />}/>*/}


                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App