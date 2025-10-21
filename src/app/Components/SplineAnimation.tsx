import Spline from '@splinetool/react-spline/next';

export default function SplineAnimation() {
  return (
    <div>
      <Spline style={{ height: '50vh', width: '35vw' }} 
        scene="https://prod.spline.design/q6tk0Fsgf8gjIMcK/scene.splinecode" 
      />
    </div>
  );
}
