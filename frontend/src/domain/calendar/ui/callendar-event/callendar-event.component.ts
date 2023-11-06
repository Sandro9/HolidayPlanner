import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorTheme } from 'src/domain/color/domain/models/color-theme.model';

@Component({
  	selector: 'app-callendar-event',
  	standalone: true,
  	imports: [CommonModule],
  	templateUrl: './callendar-event.component.html',
	styleUrls: ['./callendar-event.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallendarEventComponent {
	private _topPos: number = 0;
	@Input()
	set topPos(pos: number) {
		this._topPos = pos;
	}
	get topPos(): number {
		return this._topPos;
	}

	private _leftPosPercent: number = 0;
	@Input()
	set leftPosPercent(pos: number) {
		this._leftPosPercent = pos;
	}

	get leftPosPercent(): number {
		return this._leftPosPercent;
	}

	private _rightPosPercent: number = 0;
	@Input()
	set rightPosPercent(pos: number) {
		this._rightPosPercent = pos;
	}
	get rightPosPercent(): number {
		return this._rightPosPercent;
	}

	private _height: number = 24;
	@Input()
	set height(height: number) {
		this._height = height;
	}
	get height(): number {
		return this._height;
	}

	private _theme: ColorTheme = {
		primaryColor: '#f87171',
    	secondaryColor: '#fafafa'
	}
	@Input()
	set colorTheme(theme: ColorTheme) {
		this._theme = theme;
	}
	get colorTheme(): ColorTheme {
		return this._theme;
	}

	@HostBinding('style.top') get top(): string {
		return  this._topPos + "px";
	}

	@HostBinding('style.left') get left(): string {
		return this._leftPosPercent + "%";
	}

	@HostBinding('style.right') get right(): string {
		return this._rightPosPercent + "%";
	}

	@HostBinding('style.height') get cellHeight(): string {
		return  this._height + "px";
	}

	@HostBinding('style.backgroundColor') get backgroundColor(): string {
		return  this._theme.primaryColor;
	}

	@HostBinding('style.color') get color(): string {
		return  this._theme.secondaryColor;
	}
}
