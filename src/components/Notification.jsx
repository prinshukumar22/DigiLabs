const NotificationPage = () => {
  const sendNotification = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      showNotification();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          showNotification();
        }
      });
    }
  };

  const showNotification = () => {
    new Notification("Hello", {
      body: "You clicked a button!",
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center pt-6">
        <h1 className="text-center text-4xl font-semibold mb-8">
          Notification
        </h1>
        <p className="">Lorem ipsum dolor sit amet.</p>
        <div className="container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <button onClick={sendNotification} className="text-2xl font-bold p-4">
        Send Notification
      </button>
    </div>
  );
};

export default NotificationPage;
