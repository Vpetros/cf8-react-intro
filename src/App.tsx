// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";
import PreviousValue from "./components/PreviousValue.tsx";
// import FocusInput from "./components/FocusInput.tsx";
// import WindowSize from "./components/WindowSize.tsx";
// import CounterAdvanced from "./components/CounterAdvanced.tsx";
// import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import {useEffect} from "react";
// import Timer from "./components/Timer.tsx";
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
            <Layout>
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
                <PreviousValue/>

            </Layout>
        </>
    )
}

export default App