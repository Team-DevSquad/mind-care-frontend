"use client";
import React, { useEffect, useState } from "react";
import AgoraUIKit from "agora-react-uikit";

const VideoCallPage = () => {
  const [videoCall, setVideoCall] = useState(true);

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  const rtcProps = {
    appId: "ced4e343c11f4cefb701f5c8ec2bf880",
    channel: "Appointment1",
    token:
      "007eJxTYMgNW7T7zCar0uTDix99Ot2i67HHIfHeljXhdb9mTDRhrN2owJCUapqWbJGanGqcZmliaG5qYWGUlGxoZphmkJJkaJiS7BnyMbUhkJHhVXw6CyMDBIL4PAyOBQX5mXklual5JYYMDABGUiVR",
  };
  return videoCall ? (
    <div style={{ display: "flex", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
};

export default VideoCallPage;