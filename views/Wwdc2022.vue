<template>
<div>
    <img src="@/assets/Wwdc/bonsai1.png" alt="Bonsai UI" class="hero" />
    <div class="inner-content">
        <h3 class="heading"><b>Bonsai-Rx State Visualizer</b></h3>
        <p class="paragraph">
            During COVID, I had the opportunity to work with Goncalo Lopes, the Director of Neurogears, in order to develop a frontend visualizer for a Modified Go-NoGo joystick task. This task was designed to analyze decision-making behaviors and motor responses in experimental settings.
        </p>
    </div>

    <img src="@/assets/Wwdc/bonsai2.png" class="images" />
    <h6 class="subtitle">Bonsai UI</h6>

    <div class="inner-content">
        <h3 class="heading"><b>Hardware Integration</b></h3>
        <p class="paragraph">
            The Bonsai visualizer interfaces with specialized hardware from the Champalimaud Foundation, allowing for real-time data processing and experimental control. The setup integrates:
        </p>
        <ul class="paragraph">
            <li>🔊 Bonsai Audio Library – Processes and plays auditory stimuli.</li>
            <li>🎛️ Bonsai Harp Library – Interfaces with **Harp Behavior Boards** for behavioral task execution.</li>
            <li>🎥 Spinnaker Camera SDK – Captures and logs subject behavior.</li>
            <li>🖥️ State Visualizer – Provides a live visual representation of trial progress.</li>
        </ul>
    </div>

<img src="@/assets/Wwdc/bonsai3.png" class="images" />
<h6 class="subtitle">Harp CF Hardware Setup</h6>

<div class="inner-content">
    <h3 class="heading"><b>State Tracking</b></h3>
    <p class="paragraph">
        The Modified Go-NoGo Task required the development of a real-time state machine in Bonsai, where each state represented a different phase of the trial:
    </p>
    <ul class="paragraph">
        <li>⏳ Inter-Trial Interval (ITI) – A randomized delay before the next trial begins.</li>
        <li>🔊 Go/No-Go Stimulus Presentation – An auditory cue signals the participant to respond.</li>
        <li>🕹️ Response Phase – The subject either pushes the joystick (Go) or withholds response (No-Go).</li>
        <li>✅ Feedback Phase – Correct responses lead to a reward, incorrect ones trigger a penalty.</li>
    </ul>
    <p class="paragraph">
        Using Harp Behavior Boards, responses were synchronized with digital inputs, enabling precise tracking of subject behavior. Additionally, FLIR cameras and Bonsai’s VideoWriter node recorded movement patterns for later analysis.
    </p>
</div>

<img src="@/assets/Wwdc/bonsai4.png" class="images" />
<h6 class="subtitle">Joystick Event Tracking</h6>

<div class="inner-content">
    <h3 class="heading"><b>State Visualization & Data Output</b></h3>
    <p class="paragraph">
        The Bonsai State Visualizer provided real-time feedback on trial states, tracking Joystick and Soundcard inputs in sync with task events. This data was processed and saved in .BIN and CSV formats, later analyzed using MATLAB and Python.
    </p>
    <p class="paragraph">
        Key outputs included:
    </p>
    <ul class="paragraph">
        <li>📊 StateTransitions.csv – Logs every transition between trial phases.</li>
        <li>📝 ResponseStats.csv – Stores participant responses and performance accuracy.</li>
        <li>🎵 HarpSoundcard.bin – Captures auditory stimuli for playback analysis.</li>
    </ul>
</div>

<img src="@/assets/Wwdc/bonsai5.png" class="images" />
    <h6 class="subtitle">State Visualizer C# Script</h6>
    <div class="pt-7">
        <h3 class="underline font-bold text-md pb-1">User Guide</h3>
        <a style="color: #ff5733" href="/files/ReadMeBonsai.pdf" class="font-thin text-sm pb-2.5">Download the User Guide here.</a>
    </div>
</div>
</template>

<style scoped>
.hero {
    width: 100%;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid rgb(0, 0, 0, 0.1);
}

.images {
    width: 100%;
    height: auto;
    /* object-fit: cover; */
}

.images-full {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.subtitle {
    font-size: 12px;
    color: gray;
    text-align: center;
}

.heading {
    padding-bottom: 5px;
}

.inner-content {
    padding-top: 30px;
    padding-bottom: 30px;
}

h6,
h3 {
    margin: 0;
    padding: 0;
}
</style>
