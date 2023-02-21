import { Timer } from './Timer/Timer';

export const App = () => {
  return (
    <>
    <div
      style={{
        height: '30',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >  
      <p>36 000 000</p>
    </div>
    <Timer></Timer>
    </>
  );
};
