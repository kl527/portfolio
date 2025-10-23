import Spline from '@splinetool/react-spline/next';

export default function SplineAnimation() {
  return (
    <div style={{ 
      height: '50vh', 
      width: '80vw'
    }} className='mb-[-50px] md:mb-[-95px] lg:mb-0 mt-[-20px] md:mt-[-50px] lg:mt-0'>
      <Spline 
        style={{ height: '100%', width: '100%' }} 
        scene="https://prod.spline.design/q6tk0Fsgf8gjIMcK/scene.splinecode" 
      />
    </div>
  );
}
