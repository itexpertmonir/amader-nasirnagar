import { auth, provider } from "./firebase-config.js";
import {
signInWithPopup,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const loginBtn = document.getElementById("googleLogin");
const logoutBtn = document.getElementById("logoutBtn");

loginBtn?.addEventListener("click", async () => {
try {
await signInWithPopup(auth, provider);
} catch (e) {
alert(e.message);
}
});

logoutBtn?.addEventListener("click", async () => {
await signOut(auth);
});

onAuthStateChanged(auth, (user) => {
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePhoto = document.getElementById("profilePhoto");
const navAvatar = document.getElementById("navAvatar");
const uploadBox = document.getElementById("uploadBox");

if (user) {
profileName.textContent = user.displayName || "User";
profileEmail.textContent = user.email || "";
profilePhoto.src = user.photoURL || "assets/default-avatar.png";
navAvatar.src = user.photoURL || "assets/default-avatar.png";

```
loginBtn.classList.add("hidden");
logoutBtn.classList.remove("hidden");
navAvatar.classList.remove("hidden");
uploadBox.classList.remove("hidden");
```

} else {
profileName.textContent = "Guest User";
profileEmail.textContent = "Login করুন";
profilePhoto.src = "assets/default-avatar.png";

```
loginBtn.classList.remove("hidden");
logoutBtn.classList.add("hidden");
navAvatar.classList.add("hidden");
uploadBox.classList.add("hidden");
```

}
});
