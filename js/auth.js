import { auth, provider, db } from "./firebase-config.js";
import {
signInWithPopup,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import {
doc,
setDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

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

onAuthStateChanged(auth, async (user) => {
const uploadBox = document.getElementById("uploadBox");
const navAvatar = document.getElementById("navAvatar");
const profilePhoto = document.getElementById("profilePhoto");
const composerAvatar = document.getElementById("composerAvatar");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");

if (user) {
loginBtn.classList.add("hidden");
logoutBtn.classList.remove("hidden");
uploadBox.classList.remove("hidden");

```
navAvatar.classList.remove("hidden");
navAvatar.src = user.photoURL;

profilePhoto.src = user.photoURL;
composerAvatar.src = user.photoURL;

profileName.textContent = user.displayName;
profileEmail.textContent = user.email;

await setDoc(doc(db, "users", user.uid), {
  uid: user.uid,
  name: user.displayName,
  email: user.email,
  photoURL: user.photoURL,
  updatedAt: serverTimestamp()
}, { merge: true });
```

} else {
loginBtn.classList.remove("hidden");
logoutBtn.classList.add("hidden");
uploadBox.classList.add("hidden");
navAvatar.classList.add("hidden");
}
});
