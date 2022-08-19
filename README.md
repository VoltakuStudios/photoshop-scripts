# photoshop-scripts

Problem:
Sampling a Color at the current cursor coordinates using the Eyedropper tool does not record the Action robustly: The Action will simply say "Set Color to RRGGBB", rather than any history surrounding the sample coordinates.

Solution:
Run the sampleSelection.jsx script to explicitly sample the RGB values at the cursor coordinates in a way that is reproducible by the Actions tool. 
