import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "/watch",
          element: <WatchPage/>
        }
      ]

      
    }
    
  ])


  {
    /* 
    Head

    Body
      Sidebar
        MenuItems
      MainContainer
        ButtonsList
        VideoContainer
          VideoCard
  */
  }

  return (
    <Provider store={appStore}>
      <div className="">
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;