export interface TemplateMap<T> {
  [key: string]: () => T;
}
type TemplateFunction<T> = () => Partial<T>;


export abstract class DataFactory<T> {
  protected templates: TemplateMap<T> = {};

  protected addTemplate<K extends keyof TemplateMap<T>>(
    templateName: K,
    template: TemplateMap<T>[K]
  ): void {
    this.templates[templateName] = template;
  }

  public giveme<K extends keyof TemplateMap<T>>(templateName: K): Partial<T> {
    const template = this.templates[templateName] as TemplateFunction<T>;
  
    if (!template) {
      throw new Error(`Template "${String(templateName)}" not found`);
    }
  
    const result: Partial<T> = {};
  
    for (const key in template()) {
      if (template().hasOwnProperty(key)) {
        const value = template()[key];
        result[key] = value;
      }
    }
  
    return result;
  }
  
  
}
    
