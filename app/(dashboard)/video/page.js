"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const VideoCallPage = () => {
  const [isWindowDefined, setIsWindowDefined] = useState(false);
  const [videoCall, setVideoCall] = useState(false);

  useEffect(() => {
    setIsWindowDefined(typeof window !== "undefined");
  }, []);

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  const AgoraUIKit = dynamic(() => import("agora-react-uikit"), {
    ssr: false,
  });

  const rtcProps = {
    appId: "ced4e343c11f4cefb701f5c8ec2bf880",
    channel: "Appointment1",
    token:
      "007eJxTYJDJ/PjqzNQDVSfTM+c5PZd5XfHmavbCpIk3nvFvaprBbB+rwJCUapqWbJGanGqcZmliaG5qYWGUlGxoZphmkJJkaJiSHOf6NbUhkJHhdscPZkYGCATxeRgcCwryM/NKclPzSgwZGAB00iYz",
  };

  return isWindowDefined ? (
    videoCall ? (
      <div
        style={{ display: "flex", justifyContent: "center", height: "90vh" }}
      >
        <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
      </div>
    ) : (
      <button
        className="px-2 py-1 bg-blue-500 text-white rounded-md"
        onClick={() => setVideoCall(true)}
      >
        Join
      </button>
    )
  ) : null;
};

export default VideoCallPage;
