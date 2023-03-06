import React from 'react'

function Profile() {
  return (
    <div>

<button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">
  About Me
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">About Me</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      As a web developer with a background in content
curation and social media management, I possess strong
adaptability and problem-solving skills, as well as a
passion for continuous learning. With my experience in
video production, data analysis, and content creation, I
have developed a keen eye for detail and a unique
perspective that enable me to excel in web development
fundamentals like HTML, CSS, and Javascript.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Profile