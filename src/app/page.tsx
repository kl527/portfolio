import CarouselSection from "./Components/CarouselSection";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [loadingProgress, setLoadingProgress] = useState(0);
  // const [fadeOut, setFadeOut] = useState(false);

  // useEffect(() => {
  //   const startTime = Date.now();
  //   const minLoadTime = 2000;
  //   let progressInterval: NodeJS.Timeout;

  //   const updateProgress = (progress: number) => {
  //     console.log("Progress update:", progress);
  //     setLoadingProgress(Math.round(progress));
  //   };

  //   const smoothProgressUpdate = (
  //     from: number,
  //     to: number,
  //     duration: number
  //   ) => {
  //     return new Promise<void>((resolve) => {
  //       const steps = Math.max(1, Math.floor(duration / 30));
  //       const increment = (to - from) / steps;
  //       let progress = from;
  //       let stepCount = 0;

  //       progressInterval = setInterval(() => {
  //         stepCount++;
  //         progress += increment;

  //         if (stepCount >= steps) {
  //           updateProgress(to);
  //           clearInterval(progressInterval);
  //           resolve();
  //         } else {
  //           updateProgress(progress);
  //         }
  //       }, 30);
  //     });
  //   };

  //   const checkImagesLoaded = () => {
  //     const images = document.querySelectorAll("img");
  //     const totalImages = images.length;

  //     if (totalImages === 0) {
  //       return Promise.resolve();
  //     }

  //     return new Promise<void>((resolve) => {
  //       let loadedImages = 0;

  //       const imageLoaded = () => {
  //         loadedImages++;
  //         if (loadedImages === totalImages) {
  //           resolve();
  //         }
  //       };

  //       images.forEach((img) => {
  //         if (img.complete) {
  //           imageLoaded();
  //         } else {
  //           img.addEventListener("load", imageLoaded);
  //           img.addEventListener("error", imageLoaded);
  //         }
  //       });
  //     });
  //   };

  //   const startLoading = async () => {
  //     await smoothProgressUpdate(0, 15, 400);
  //     await smoothProgressUpdate(15, 35, 600);
  //     await smoothProgressUpdate(35, 55, 500);

  //     try {
  //       await checkImagesLoaded();
  //       await smoothProgressUpdate(55, 85, 800);
  //     } catch {
  //       await smoothProgressUpdate(55, 85, 600);
  //     }

  //     await smoothProgressUpdate(85, 100, 800);

  //     const elapsed = Date.now() - startTime;
  //     const remainingTime = Math.max(0, minLoadTime - elapsed);

  //     setTimeout(() => {
  //       setFadeOut(true);
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 600);
  //     }, remainingTime + 300);
  //   };

  //   startLoading();

  //   return () => {
  //     if (progressInterval) {
  //       clearInterval(progressInterval);
  //     }
  //   };
  // }, []);

  return (
    <div className="min-h-screen">
      {/* {isLoading && (
        <div
          className={`fixed inset-0 bg-[var(--charcoal)]/80 z-50 flex flex-col items-center justify-center transition-opacity duration-600 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center gap-8 max-w-sm mx-auto px-6">
            <p className="text-[var(--cream)] text-center lato-regular text-lg leading-relaxed">
              While all the contents are horizontally placed, scroll as you
              normally would to view this portfolio.
            </p>

            <div className="w-48 flex flex-col items-center gap-4">
              <div
                className="w-full h-0.5 rounded-full overflow-hidden relative"
                style={{ backgroundColor: "rgba(252, 248, 244, 0.5)" }}
              >
                <div
                  className="absolute top-0 left-0 h-full transition-all duration-100 ease-out"
                  style={{
                    width: `${loadingProgress}%`,
                    backgroundColor: "#FCF8F4",
                    maxWidth: "100%",
                  }}
                />
              </div>
              <span
                className="text-sm lato-regular"
                style={{ color: "#FCF8F4" }}
              >
                {loadingProgress}%
              </span>
            </div>
          </div>
        </div>
      )} */}
      <CarouselSection />
    </div>
  );
}
