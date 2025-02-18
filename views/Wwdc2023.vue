<script setup>
const getImagePath = (img) => {
    const path = `../assets/Wwdc/${img}`;
    const modules =
        import.meta.glob("../assets/Wwdc/*", {
            eager: true
        });
    const mod = modules[path]
    return mod.default;
};
</script>

<template>
<div>
    <img src="@/assets/Wwdc/linescan.png" alt="Juo Lab Line Scanner" class="hero" />
    <div class="inner-content">
        <h3 class="heading"><b>Juo Lab Line Scanner</b></h3>
        <p class="paragraph">
            A Python-based pipeline for performing punctate quantitative analysis on C. elegans ventral cord fluorescence scans. (6/2022-8/2022)
        </p>
    </div>
    <img src="@/assets/Wwdc/linescan1.gif" class="images" />
      <h6 class="subtitle">C. elegans</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Background</b></h3>
        <p class="paragraph">
            The first ionotropic glutamate receptor subunit to be characterized was found to play a key role in facilitating the worm’s nose-touch response.  Mutations in this glr-1 interfere with the glutamatergic activity between sensory and command interneurons.
        </p>
    </div>
    <img src="@/assets/Wwdc/linescan3.png" class="images" />
      <h6 class="subtitle">Fluorescence Scans</h6>
      <div class="inner-content">
        <p class="paragraph">
            In order to localize these iGluRs, a functional fusion chimera between iGluRs and GFP was generated.  In these transgenic worms, fluorescence can be observed in a punctate pattern along the ventral nerve cord.  Functional glr-1::GFP proteins have proven to be invaluable in ascertaining the trafficking and recruitment of glr-1 containing receptors.
        </p>
    </div>
    <img src="@/assets/Wwdc/linescan2.png" class="images" />
      <h6 class="subtitle">Application GUI</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Installation</b></h3>
        <p class="paragraph">
            This program takes these fluorescence scans and translates user-provided tracings into punctate traces for analysis.  It includes a built-in graphical user interface for ease of use and optimizes of previous draw scanners by implementing the Billauer algorithm for peak detection.  Current version dependencies include:
        </p>
        <p class="paragraph">
            PySimpleGUI
        </p>
        <p class="paragraph">
            OpenCV
        </p>
        <p class="paragraph">
            SciPy
        </p>
        <p class="paragraph">
            
        </p>
        <a class="underline text-blue-700" href="https://www.github.com/sahil-suresh/JuoLabLineScan">Install here</a>
    </div>
    <img src="@/assets/Wwdc/linescangui1.gif" class="images" />
    <h6 class="subtitle">Export Datasets and Graphs</h6>
    <img src="@/assets/Wwdc/linescangui2.gif" class="images" />
    <h6 class="subtitle">Perform ROI Analysis</h6>
    <img src="@/assets/Wwdc/linescangui3.gif" class="images" />
    <h6 class="subtitle">Specify Analysis Type</h6>
    <img src="@/assets/Wwdc/linescangui4.gif" class="images" />
    <h6 class="subtitle">Perform Batch Analyses</h6>
    <img src="@/assets/Wwdc/linescangui5.gif" class="images" />
    <h6 class="subtitle">Setup Experiments</h6>
    <img src="@/assets/Wwdc/linescangui6.gif" class="images" />
    <h6 class="subtitle">Analyze Single Fluorescent Scans</h6>
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
    height: 350px;
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

h6 {
    margin-bottom: 15px !important;
}
</style>
