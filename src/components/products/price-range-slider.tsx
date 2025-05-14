"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PriceRangeSliderProps {
    min: number
    max: number
    initialMin: number
    initialMax: number
    step: number
    formatPrice: (price: number) => string
    onRangeChange: (min: number, max: number) => void
    onRangeCommit?: (min: number, max: number) => void
}

export function PriceRangeSlider({
    min,
    max,
    initialMin,
    initialMax,
    step,
    formatPrice,
    onRangeChange,
    onRangeCommit,
}: PriceRangeSliderProps) {
    // Use refs to track internal state without causing re-renders
    const rangeRef = useRef<[number, number]>([initialMin, initialMax])
    const [displayRange, setDisplayRange] = useState<[number, number]>([initialMin, initialMax])
    const [minInput, setMinInput] = useState(initialMin.toString())
    const [maxInput, setMaxInput] = useState(initialMax.toString())
    const [isDragging, setIsDragging] = useState(false)

    // Track if the component is mounted to prevent updates during unmount
    const isMounted = useRef(false)

    // Initialize on mount
    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])

    // Update internal state when props change (but not during normal operation)
    useEffect(() => {
        if (isMounted.current) {
            rangeRef.current = [initialMin, initialMax]
            setDisplayRange([initialMin, initialMax])
            setMinInput(initialMin.toString())
            setMaxInput(initialMax.toString())
        }
    }, [initialMin, initialMax])

    // Handle slider change - only update visual display
    const handleSliderChange = useCallback((value: number[]) => {
        const newRange = value as [number, number]
        rangeRef.current = newRange
        setDisplayRange(newRange)
        setMinInput(newRange[0].toString())
        setMaxInput(newRange[1].toString())
    }, [])

    // Handle slider commit - notify parent when user releases the slider
    const handleSliderCommit = useCallback(() => {
        if (onRangeChange) {
            onRangeChange(rangeRef.current[0], rangeRef.current[1])
        }
        if (onRangeCommit) {
            onRangeCommit(rangeRef.current[0], rangeRef.current[1])
        }
        setIsDragging(false)
    }, [onRangeChange, onRangeCommit])

    // Handle slider drag start
    const handleSliderDragStart = useCallback(() => {
        setIsDragging(true)
    }, [])

    // Handle min input change
    const handleMinInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMinInput(e.target.value)
    }, [])

    // Handle max input change
    const handleMaxInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxInput(e.target.value)
    }, [])

    // Apply input values
    const applyInputValues = useCallback(() => {
        const newMin = Math.max(min, Math.min(Number(minInput) || min, Number(maxInput) || max))
        const newMax = Math.min(max, Math.max(Number(maxInput) || max, newMin))

        rangeRef.current = [newMin, newMax]
        setDisplayRange([newMin, newMax])

        if (onRangeChange) {
            onRangeChange(newMin, newMax)
        }
        if (onRangeCommit) {
            onRangeCommit(newMin, newMax)
        }
    }, [minInput, maxInput, min, max, onRangeChange, onRangeCommit])

    // Handle preset price ranges
    const handlePresetRange = useCallback(
        (presetMin: number, presetMax: number) => {
            rangeRef.current = [presetMin, presetMax]
            setDisplayRange([presetMin, presetMax])
            setMinInput(presetMin.toString())
            setMaxInput(presetMax.toString())

            if (onRangeChange) {
                onRangeChange(presetMin, presetMax)
            }
            if (onRangeCommit) {
                onRangeCommit(presetMin, presetMax)
            }
        },
        [onRangeChange, onRangeCommit],
    )

    return (
        <div className="space-y-4">
            {/* Preset price ranges */}
            <div className="flex flex-wrap gap-2 text-xs">
                <Button
                    variant="outline"
                    size="sm"
                    className={`px-2 py-1 h-auto ${displayRange[0] === 0 && displayRange[1] === 1000 ? "bg-muted" : ""}`}
                    onClick={() => handlePresetRange(0, 1000)}
                >
                    Under {formatPrice(1000)}
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className={`px-2 py-1 h-auto ${displayRange[0] === 1000 && displayRange[1] === 2500 ? "bg-muted" : ""}`}
                    onClick={() => handlePresetRange(1000, 2500)}
                >
                    {formatPrice(1000)} - {formatPrice(2500)}
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className={`px-2 py-1 h-auto ${displayRange[0] === 2500 && displayRange[1] === 5000 ? "bg-muted" : ""}`}
                    onClick={() => handlePresetRange(2500, 5000)}
                >
                    {formatPrice(2500)} - {formatPrice(5000)}
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className={`px-2 py-1 h-auto ${displayRange[0] === 5000 && displayRange[1] === 10000 ? "bg-muted" : ""}`}
                    onClick={() => handlePresetRange(5000, 10000)}
                >
                    Over {formatPrice(5000)}
                </Button>
            </div>

            {/* Slider */}
            <div
                className="py-4 px-1 touch-none"
                onMouseDown={handleSliderDragStart}
                onTouchStart={handleSliderDragStart}
                onMouseUp={handleSliderCommit}
                onTouchEnd={handleSliderCommit}
            >
                <Slider
                    value={displayRange}
                    min={min}
                    max={max}
                    step={step}
                    onValueChange={handleSliderChange}
                    onValueCommit={handleSliderCommit}
                    className={`${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                />
            </div>

            {/* Input fields */}
            <div className="flex items-center gap-2">
                <div className="flex-1">
                    <Input type="number" min={min} max={max} value={minInput} onChange={handleMinInputChange} className="h-9" />
                </div>
                <span className="text-sm text-muted-foreground">to</span>
                <div className="flex-1">
                    <Input type="number" min={min} max={max} value={maxInput} onChange={handleMaxInputChange} className="h-9" />
                </div>
                <Button size="sm" className="h-9" onClick={applyInputValues}>
                    Go
                </Button>
            </div>

            {/* Current range display */}
            <div className="text-sm text-muted-foreground text-center">
                Current range: {formatPrice(displayRange[0])} - {formatPrice(displayRange[1])}
            </div>
        </div>
    )
}
