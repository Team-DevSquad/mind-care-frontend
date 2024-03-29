"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
var token = '';
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

  async function fetchAppointmentToken(appointmentId) {
    try {
      const response = await fetch(`https://mindcare-app.onrender.com/api/appointments/${appointmentId}`);
      const data = await response.json();
      console.log(data);
      console.log(data.payload[0].appointment_token)
      token = data.payload[0].appointment_token;
      return token;
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const appointmentId = 1; // replace with your appointment id
fetchAppointmentToken(appointmentId)
  .then(token => console.log(token));
  // console.log(token);
  const rtcProps = {
    appId: "be5fc8ece3f94175882bc161f0db11dc",
    channel: "Appointment2",
    token:token
      // "007eJxTYJDJ/PjqzNQDVSfTM+c5PZd5XfHmavbCpIk3nvFvaprBbB+rwJCUapqWbJGanGqcZmliaG5qYWGUlGxoZphmkJJkaJiSHOf6NbUhkJHhdscPZkYGCATxeRgcCwryM/NKclPzSgwZGAB00iYz",
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