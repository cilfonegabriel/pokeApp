import {dotSpinner} from 'ldrs/dist/dotSpinner.js';

dotSpinner.register()

const Loader = () => {
  return (
    <div className="flex justify-center mt-200">
      <l-dot-spinner
        size="40"
        speed="0.9"
        color="black" 
      ></l-dot-spinner>
    </div>
  )
}
export default Loader;