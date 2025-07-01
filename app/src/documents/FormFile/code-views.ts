export const FILE_DEFAULT = `    <div class="form-label-container">
      <label for="exampleInputFile" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <input 
      type="file" 
      class="form-control" 
      id="exampleInputFile"
      name="uploadedFile"
      aria-describedby="carga de archivo"
      accept="image/png, image/jpeg" 
    />
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
`;

export const FILE_DISABLED = `    <div class="form-label-container">
      <label for="exampleInputFile" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <input 
      type="file" 
      class="form-control" 
      id="exampleInputFile"
      name="uploadedFile" 
      accept="image/png, image/jpeg"
      aria-describedby="carga de archivo"
      disabled 
    />
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
`;

export const INPUT_FILE_ACCESSIBILITY = `<div class="form-label-container"> 
   <label for="exampleInputFile" class="form-label">Label</label> 
   <span class="badge-forms badge-required-forms">Requerido</span>
</div>
<input type="file" class="form-control" id="exampleInputFile" name="uploadedFile" aria-describedby="carga de archivo" accept="image/png, image/jpeg" />
<p class="form-label-description">
  Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
</p>
`;
