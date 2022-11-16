import logo from './logo.svg';
import './App.css';
import { Card, CardContent } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-60 '>
        <Box className='p-8 rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 shadow-xl ' >
          <Box>
            Hello world ,Welcome to React tailwind + MUI!
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default App;
