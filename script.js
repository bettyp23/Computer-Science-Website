// //Function to toggle subtopics visibility
// function toggleSubtopics(id) {
//     const allSubtopics = document.querySelectorAll('.subtopics');
//     allSubtopics.forEach(el => {
//       if (el.id !== id) {
//         el.style.display = 'none';
//       }
//     });

//   // Toggle the selected one
//   const clickedSubtopic = document.getElementById(id);
//   if (clickedSubtopic.style.display === 'block') {
//     clickedSubtopic.style.display = 'none';
//   } else {
//     clickedSubtopic.style.display = 'block';
//   }
// }

// // Optional: collapse all subtopics when the page loads
// window.addEventListener('load', () => {
//   document.querySelectorAll('.subtopics').forEach(el => {
//     el.style.display = 'none';
//   });
// });