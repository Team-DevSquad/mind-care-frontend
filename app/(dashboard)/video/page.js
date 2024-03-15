"use client";

import React, { useEffect, useState } from "react";

const VideoCallPage = () => {
  const [videoCall, setVideoCall] = useState(false);

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };


  const AgoraUIKit =
    typeof window !== "undefined" && require("agora-react-uikit");

  const rtcProps = {
    appId: "ced4e343c11f4cefb701f5c8ec2bf880",
    channel: "Appointment1",
    token:
      "007eJxTYMgNW7T7zCar0uTDix99Ot2i67HHIfHeljXhdb9mTDRhrN2owJCUapqWbJGanGqcZmliaG5qYWGUlGxoZphmkJJkaJiS7BnyMbUhkJHhVXw6CyMDBIL4PAyOBQX5mXklual5JYYMDABGUiVR",
  };

  return videoCall ? (
    <div style={{ display: "flex", height: "100vh" }}>
      {AgoraUIKit && <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />}
    </div>
  ) : (
    <button
      className="px-2 py-1 bg-blue-500 text-white rounded-md"
      onClick={() => setVideoCall(true)}
    >
      Join
    </button>
  );
};

export default VideoCallPage;
