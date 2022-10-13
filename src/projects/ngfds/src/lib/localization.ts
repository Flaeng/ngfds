import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export const FDS_LOCALIZATION = new InjectionToken<Localization>(
  'FDS_LOCALIZATION'
);
export const FDS_CURRENT_LANGUAGE = new InjectionToken<string>(
  'FDS_CURRENT_LANGUAGE'
);
export interface Localization {
  [language: string]: Dictionary;
}
export interface Dictionary {
  alert: AlertDictionary | null;
  // dropdown: AlertDictionary | null;
}
export interface AlertDictionary {
  close: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  protected _dictionary: Subject<Dictionary>;
  public get Dictionary(): Observable<Dictionary> {
    return this._dictionary;
  }

  static DEFAULT_DICTIONARY: Dictionary = {
    alert: {
      close: 'Luk',
    },
  };

  protected localization: Localization;

  constructor(
    @Optional()
    @Inject(FDS_LOCALIZATION)
    _localization: Localization | null,
    @Optional()
    @Inject(FDS_CURRENT_LANGUAGE)
    _currentLanguage: string | null
  ) {
    this.localization =
      _localization !== null
        ? this.ensureDictionariesAreValid(_localization)
        : { da: LocalizationService.DEFAULT_DICTIONARY };
    const initialLanguage = _currentLanguage ?? Object.keys(this.localization)[0];
    this._dictionary = new BehaviorSubject(this.localization[initialLanguage]);
  }

  private ensureDictionariesAreValid(localization: Localization): Localization {
    for (const language in localization) {
      if (Object.prototype.hasOwnProperty.call(localization, language)) {
        const dictionary = localization[language];
        this.ensureDictionaryIsValid(dictionary);
      }
    }
    return localization;
  }

  private ensureDictionaryIsValid(dictionary: Dictionary): Dictionary {
    const defaultValue = LocalizationService.DEFAULT_DICTIONARY;

    for (const language in defaultValue) {
      const dictionaryValue: Dictionary | null = Reflect.get(
        dictionary,
        language,
        dictionary
      );
      const fallbackDictionary: Dictionary = Reflect.get(
        defaultValue,
        language,
        defaultValue
      );

      // ComponentDictionary was null - just set default
      if (dictionaryValue === null) {
        Reflect.set(dictionary, language, fallbackDictionary, dictionary);
      } else {
        this.setNullPropertiesToFallback(dictionaryValue, fallbackDictionary);
      }
    }

    return dictionary;
  }

  private setNullPropertiesToFallback(
    dictionary: Dictionary,
    fallbackDictionary: Dictionary
  ) {
    for (const propName of Object.keys(fallbackDictionary)) {
      const dictionaryString: string | null = Reflect.get(
        dictionary,
        propName,
        dictionary
      );
      if (dictionaryString === null) {
        const fallbackValue: string = Reflect.get(
          fallbackDictionary,
          propName,
          fallbackDictionary
        );
        Reflect.set(dictionary, propName, fallbackValue, dictionary);
      }
    }
  }

  public setLanguage(language: string): void {
    const dictionary = this.localization[language];
    if (!dictionary)
      throw new Error(
        `Failed to find language '${language}' in Localization provided`
      );
    this._dictionary.next(dictionary);
  }
}
