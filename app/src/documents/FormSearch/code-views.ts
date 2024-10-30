export const SEARCH = `
  <form>
    <label for="search" class="form-label">Ejemplo Buscador</label>
    <div class='search-container'>
      <input type="search" class="form-control input-search" id="search" placeholder="Buscar..." />
      <button class="reset" type="reset" aria-label="Borrar"></button>
    </div>
  </form>
`;
export const SEARCH_BUTTON = `
  <form>
    <label for="search-btn" class="form-label">Ejemplo Buscador con botón</label>
    <div class='search-container'>
      <input type="search" class="form-control input-search input-search-with-button" id="search-btn" placeholder="Buscar..." />
      <button class="reset" type="reset" aria-label="Borrar"></button>
      <button class="button-search" type="submit" aria-label="Buscar"></button>
    </div>
  </form>
`;
export const SEARCH_DISABLED = `
  <form>
    <label for="search-btn" class="form-label disabled">Ejemplo Buscador deshabilitado</label>
    <div class='search-container'>
      <input type="search" class="form-control input-search input-search-with-button" id="search-btn" placeholder="Buscar..." disabled />
      <button class="reset" type="reset" aria-label="Borrar"></button>
    </div>
  </form>
`;
