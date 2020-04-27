import React from 'react';
import {ReactComponent as ReactGraphic} from './img/graphic-1.svg';

function App() {
  const [ submitted, setSubmitted ] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }
return (
<>
  <div className="bg-purple-900 w-screen h-screen flex items-center">
    <div className="bg-purple-100 
                        mx-auto
                        w-3/4 
                        md:w-1/2 
                        lg:w-1/3 
                        h-screen-3/4 
                        lg:h-screen-2/3
                        self-center
                        flex
                        flex-col
                        content-center
                        rounded-lg
        ">

      <div className="lowercase -mb-12 mt-auto px-4 text-center text-2xl font-normal font-sans ">
        enter your e-mail below<br />to subscribe to our newsletter
      </div>

      <ReactGraphic className="w-3/4 h-3/4 sm:w-2/3 sm:h-2/3 inline mx-auto mt-auto mb-20 z-10" />
      <div className="bg-yellow-500 rounded-b-lg -mt-24">
      {!submitted ? 
      
        <div className="relative border-transparent rounded mx-10 my-4 appearance-none label-floating">
          <form onSubmit={e => handleSubmit(e)}>
          <input className="w-full py-2 px-3 text-gray-800 leading-normal rounded-md" type="text" name="subscribe"
            id="subscribe" placeholder="enter your e-mail..." />
          <label className="absolute block text-gray-800 top-0 left-0 w-full px-3 py-2 leading-normal"
            htmlFor="subscribe">enter your e-mail...</label>

          </form>
        </div>
       : 
      <div className=" w-full h-10 bg-yellow-500 z-20 text-xl text-center mt-9 mb-3 lowercase leading-loose font-sans text-yellow-900">Thanks for subscribing!</div>
      }
      </div>
      

    </div>
  </div>
</>
);
}

export default App;