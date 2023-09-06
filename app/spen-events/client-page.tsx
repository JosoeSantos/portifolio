import { useEffect } from "react";

const SpenEventsPage = () => {
  function pointerHandler(e: PointerEvent) {
    console.log(e);
  }

  useEffect(() => {
    console.log("Start logging pointer events");
    window.addEventListener("pointerdown", pointerHandler);
    window.addEventListener("pointermove", pointerHandler);
  }, []);
  return (
    <div>

      <main>
        <h1>
          Beware! I&apos;m logging locally all your pointer events!
        </h1>
      </main>
    </div>
  );
};

export default SpenEventsPage;
