import { defineStore } from "pinia";

export const useWindowsStore = defineStore("windows", {
  state: () => ({
    // Height of Fullscreen Window
    // fullscreenWindowHeight: window.innerHeight + "px",

    activeWindow: "",

    // Active Windows Array State
    activeWindows: [],

    // Z-index State
    zIndex: 2,

    windows: [
      {
        windowId: "BiographyWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Biography", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "bio", // Window Content (used under slots)
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "5%", // Window Position Y (when first opened)
        iconImage: "bio.png", // Window Icon Image
        altText: "Biography", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ResumeWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Résumé", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "resume", // Window Content (used under slots)
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Résumé", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "LibraryWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Library", // Display Name (title under icon)
        windowComponent: "window", // Window Component (can be changed to use modified windows)
        windowContent: "library", // Window Content (used under slots)
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "10vw", // Window Position X (when first opened)
        positionY: "15vh", // Window Position Y (when first opened)
        iconImage: "resume.png", // Window Icon Image
        altText: "Library", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "ImagePreviewWindow",
        windowState: "close",
        displayName: "Media Viewer",
        windowComponent: "ImagePreviewWindow",
        windowContent: "",
        windowContentPadding: {
          top: "1px",
          right: "10px",
          bottom: "10px",
          left: "10px",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "file.png",
        altText: "Photos",
        fullscreen: false,
        showInAppGrid: false,
        showInNavbar: false,
        // imagePreview: file.src
      },
      {
        windowId: "NOSSAFLEXWindow",
        windowState: "close",
        displayName: "MyHax",
        windowComponent: "window",
        windowContent: "nossaflex",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "noss.webp",
        altText: "Hackathon",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
    //   {
    //     windowId: "TestBlogWindow",
    //     windowState: "close",
    //     displayName: "Blog",
    //     windowComponent: "window",
    //     windowContent: "testblog",
    //     windowContentPadding: {
    //       top: '0px',
    //       right: '0px',
    //       bottom: '0px',
    //       left: '0px',
    //     },
    //     position: "absolute",
    //     positionX: "6vw",
    //     positionY: "12vh",
    //     iconImage: "noss.webp",
    //     altText: "Blog",
    //     fullscreen: false,
    //     showInAppGrid: true,
    //     showInNavbar: true,
    //   },
    {
        windowId: "AppleWWDC2021",
        windowState: "close",
        displayName: "Cub Hub",
        windowComponent: "window",
        windowContent: "wwdc2021",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "cubhub.png",
        altText: "Cub Hub",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "AppleWWDC2022",
        windowState: "close",
        displayName: "Bonsai-Rx",
        windowComponent: "window",
        windowContent: "wwdc2022",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "bonsai.png",
        altText: "Bonsai-Rx",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "AppleWWDC2023",
        windowState: "close",
        displayName: "Juo Lab Linescan",
        windowComponent: "window",
        windowContent: "wwdc2023",
        windowContentPadding: {
          top: null,
          right: null,
          bottom: null,
          left: null,
        },
        position: "absolute",
        positionX: "4vw",
        positionY: "12vh",
        iconImage: "worm.png",
        altText: "Juo Lab Linescan",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "MailWindow",
        windowState: "close",
        displayName: "Mail",
        windowComponent: "mail",
        windowContent: "",
        windowContentPadding: {
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
        },
        position: "absolute",
        positionX: "6vw",
        positionY: "12vh",
        iconImage: "mail.png",
        altText: "Mail",
        fullscreen: false,
        showInAppGrid: true,
        showInNavbar: true,
      },
      {
        windowId: "PhotosWindow", // Unique ID
        windowState: "close", // Window State [open, close, minimize]
        displayName: "Photos", // Display Name (title under icon)
        windowComponent: 'FilesWindow', // Window Component (can be changed to use modified windows)
        windowContent: '', // Window Content (used under slots)
        windowContentPadding: {
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px'
        }, // Window Content Padding
        position: "absolute", // Window Position
        positionX: "5vw", // Window Position X (when first opened)
        positionY: "10vh", // Window Position Y (when first opened)
        positionXLarge: "23vw",
        positionYLarge: "7%",
        iconImage: "photos.png", // Window Icon Image
        altText: "Photos", // Window Icon Alt Text
        fullscreen: false, // Window Fullscreen State [true, false]
        showInNavbar: true,
        folderContent: [
            {
              id: 0,
              title: "Sketches",
              content: [
                {
                  id: 0,
                  title: "insomniabear.JPG",
                  type: "photo",
                  src: "/assets/art.jpg",
                  altText: "insomniabear.JPG",
                  size: 2477506,
                },
                {
                  id: 1,
                  title: "CandleBeavis.JPG",
                  type: "photo",
                  src: "/assets/art1.jpg",
                  altText: "CandleBeavis.JPG",
                  size: 1265051,
                },
                {
                  id: 2,
                  title: "EntenmannsSoft.JPG",
                  type: "photo",
                  src: "/assets/art2.jpg",
                  altText: "EntenmannsSoft.JPG",
                  size: 1366527,
                },
                {
                  id: 3,
                  title: "BharatBoy.JPG",
                  type: "photo",
                  src: "/assets/art3.jpg",
                  altText: "BharatBoy.JPG",
                  size: 1366527,
                },
                {
                  id: 3,
                  title: "ReminaDevoursTheSun.JPG",
                  type: "photo",
                  src: "/assets/art4.jpg",
                  altText: "ReminaDevoursTheSun.JPG",
                  size: 1366527,
                },
              ],
              size: 5109084,
              type: "folder",
              altText: "Sketches",
            },
            {
              id: 1,
              title: "SATI",
              content: [
                {
                  id: 0,
                  title: "AAG.JPG",
                  type: "photo",
                  src: "/assets/aag1.png",
                  altText: "AAG.JPG",
                  size: 2705525,
                },
                {
                  id: 1,
                  title: "BHOOT.JPG",
                  type: "photo",
                  src: "/assets/bhoot1.png",
                  altText: "BHOOT.JPG",
                  size: 3285824,
                },
                {
                  id: 2,
                  title: "MADHUBANI.JPG",
                  type: "photo",
                  src: "/assets/madhu1.png",
                  altText: "MADHUBANI.JPG",
                  size: 2524860,
                },
                {
                  id: 3,
                  title: "SHOR.JPG",
                  type: "photo",
                  src: "/assets/shor1.png",
                  altText: "SHOR.JPG",
                  size: 2126399,
                },
                {
                  id: 4,
                  title: "RAKSHASA.JPG",
                  type: "photo",
                  src: "/assets/rak1.png",
                  altText: "RAKSHASA.JPG",
                  size: 2391497,
                },
                {
                  id: 5,
                  title: "NAAM.JPG",
                  type: "photo",
                  src: "/assets/naam.png",
                  altText: "NAAM.JPG",
                  size: 1903950,
                },
              ],
              size: 18318406,
              type: "folder",
              altText: "SATI",
            },
          ],
        folderSize: 300000
    },
    ],
  }),

  getters: {
    getFullscreenWindowHeight() {
      let height = "0px";
      if (typeof window !== "undefined") {
        height = window.innerHeight + "px";
      }
      return height;
    },
  },

  actions: {
        getWindowById(windowId) {
            return this.windows.find((window) => window.windowId === windowId)
        },

        getWindowFullscreen(windowId) {
            return this.windows.find((window) => window.windowId === windowId).fullscreen
        },

        getActiveWindow() {
            return this.activeWindow
        },

        setActiveWindow(windowId) {
            this.activeWindow = windowId
        },

        setFullscreen(payload) {
            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }
            const window = getArrItem();
            window.fullscreen = payload.fullscreen;
        },

        zIndexIncrement(windowId) {
            this.zIndex++
            if (document.getElementById(windowId)) {
                document.getElementById(windowId).style.zIndex = this.zIndex
            }
        },

        // Push Active Window
        pushActiveWindow(window) {
            this.activeWindows.push(window)
        },

        // Pop Active Window
        popActiveWindow(window) {
            const windowIndex = this.activeWindows.indexOf(window)
            if (windowIndex !== -1) {
                this.activeWindows.splice(windowIndex, 1)
            }
        },

        pushNewWindow(window) {
            this.windows.push(window)
        },

        setPhotoFolderContent(payload) {
            this.photoFolderContent = payload
        },

        setWindowState(payload) {
            // payload = {'windowState': 'open', 'windowId': 'WindowOne'}

            const getArrItem = () => {
                return this.windows.find(
                    (windows) => windows.windowId === payload.windowId
                );
            }

            const window = getArrItem();

            let preventAppendingOpenWindow = false;
            if (window.windowState == "open" || window.windowState == "minimize") {
                preventAppendingOpenWindow = true;
            }

            if (payload.windowState == "open") {
                window.windowState = payload.windowState;
                setTimeout(() => {
                    this.zIndexIncrement(payload.windowId);
                }, 0);
                setTimeout(() => {
                    this.setActiveWindow(payload.windowId);
                }, 0);
                if (preventAppendingOpenWindow == false) {
                    this.pushActiveWindow(window);
                }
            } else if (payload.windowState == "close") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0);
                setTimeout(() => {
                    this.popActiveWindow(window);
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
            } else if (payload.windowState == "minimize") {
                setTimeout(() => {
                    window.windowState = payload.windowState;
                }, 0)
                setTimeout(() => {
                    this.setActiveWindow("nil");
                }, 0)
                
            } else {
                console.log("Error: windowState not found or invalid");
            }
        },
    }
});
