export const FILE_DEFAULT = `    <div class="form-label-container">
      <label for="exampleInputFile" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input 
      type="file" 
      class="form-control" 
      id="exampleInputFile" 
      aria-describedby="File"
      accept="image/png, image/jpeg" 
    />
`;

export const FILE_DISABLED = `    <div class="form-label-container">
      <label for="exampleInputFile" class="form-label">Label</label>
      <span class="badge-forms badge-required-forms">Requerido</span>
    </div>
    <p class="form-label-description">
      Este es un texto de ayuda que da mas información sobre el Input. Es opcional, pero recomendado, y de no más de 3 líneas.
    </p>
    <input 
      type="file" 
      class="form-control" 
      id="exampleInputFile" 
      accept="image/png, image/jpeg"
      aria-describedby="File"
      disabled 
    />
`;