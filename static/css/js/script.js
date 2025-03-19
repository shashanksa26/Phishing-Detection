$(document).ready(function () {
    const dropzone = $("#dropzone");
    const fileInput = $("#fileInput");
    const dropzoneText = $(".dropzone-text");
  
    // Highlight dropzone when file is dragged over
    dropzone.on("dragover", function (e) {
      e.preventDefault();
      dropzone.addClass("dragover");
    });
  
    // Remove highlight when file is dragged out
    dropzone.on("dragleave", function () {
      dropzone.removeClass("dragover");
    });
  
    // Handle file drop
    dropzone.on("drop", function (e) {
      e.preventDefault();
      dropzone.removeClass("dragover");
      const files = e.originalEvent.dataTransfer.files;
      if (files.length > 0) {
        fileInput[0].files = files;
        updateDropzoneText(files[0].name);
      }
    });
  
    // Handle file selection via click on dropzone or browse link
    dropzone.on("click", function () {
      fileInput.click();
    });
  
    $(".browse-link").on("click", function (e) {
      e.stopPropagation(); // Prevent triggering the dropzone click event
      fileInput.click();
    });
  
    // Handle file selection via file input
    fileInput.on("change", function () {
      if (this.files && this.files[0]) {
        updateDropzoneText(this.files[0].name);
      }
    });
  
    // Update dropzone text with the file name
    function updateDropzoneText(fileName) {
      dropzoneText.html(`File ready: <strong>${fileName}</strong>`);
    }
  });