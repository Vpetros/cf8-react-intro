// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
import Layout from "./components/Layout.tsx";

function App() {


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
                <ArrowFunctionalComponentWithPropsType
                    title="Is an Arrow Functional Component With 2 Props"
                    description="lorem ipsum dolor sit amet"
                />

            </Layout>
        </>
    )
}

export default App